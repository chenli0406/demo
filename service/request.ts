import * as config from './config';
let isShowModal = true;
let isShow = true;
interface RequestOptions {
  baseUrl?: string;
  url: string;
  header?: Record<string, string>;
  data?: any;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  dataType?: string;
  responseType?: string;
  complete?: (response: any) => void;
}

interface Interceptor {
  request?: (config: RequestOptions) => void;
  response?: (response: any) => any;
}

interface Config {
  baseUrl: string;
  header: Record<string, string>;
  method: string;
  dataType: string;
  timeout: number,
  responseType: string;
}

class ApiService {
  private config: Config;
  private interceptor: Interceptor;

  constructor() {
    this.config = {
      baseUrl: config.baseUrl,
      header: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      method: 'GET',
	  timeout: 60000, // 设置超时时间为60秒
      dataType: 'json',
      responseType: 'text'
    };

    this.interceptor = {
      request: null,
      response: null
    };
  }

  private createOptions(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: any): RequestOptions {
    // const token = uni.getStorageSync('token');
	const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJXRUIiLCJjcmVhdGVUaW1lIjoxNzIyNTU5MjI2Nzc3LCJ1c2VySWQiOiI3M2ZjNGM1OWQ4YjI0YWE5OWMzMGE3NzgyZjAzYjgxZCJ9.y717u50gQYjW-lT0edrc6kdYBcT23L-O9nPzJJFdPmc';
    const headers = token ? { ...this.config.header, 'X-ACCESS-TOKEN': token } : this.config.header;
    // 如果 data 为空对象或者 undefined，将其移除
    const finalData = data && Object.keys(data).length ? data : undefined;
    return {
      baseUrl: this.config.baseUrl,
      url: this.config.baseUrl + url,
      method,
      data:finalData,
      dataType: this.config.dataType,
      responseType: this.config.responseType,
      header: headers
    };
  }

  private handleTokenError(message: string) {
    uni.hideLoading();
    const flag = message === 'token不存在';
    if (flag || isShowModal) {
      isShowModal = false;
      uni.showModal({
        title: '提示',
        content: flag ? message : '登录过期，请重新登录',
        showCancel: false,
        success: () => {
          isShowModal = true;
          uni.reLaunch({ url: '/pages/login/login' });
        },
        complete: () => {
          isShowModal = true;
        }
      });
    }
  }

  private handleErrorMessage(message: string) {
    uni.hideLoading();
    uni.showToast({ title: message, icon: 'none' });
  }

  private handleHttpError(statusCode: number) {
    const messages: Record<number | string, string> = {
      401: '未授权，请重新登录',
      403: '无权限访问',
      default: '网络错误或服务器升级中'
    };
    const message = messages[statusCode] || messages.default;

    if (statusCode === 401) {
      uni.reLaunch({ url: '/pages/login/login' });
    } else if (isShow) {
      isShow = false;
      uni.showModal({
        title: '提示',
        content: message,
        showCancel: false,
        complete: () => {
          isShow = true;
        }
      });
    }
  }

  request(options: RequestOptions): Promise<any> {
    if (this.interceptor.request) {
      this.interceptor.request(options);
    }

    return new Promise((resolve) => {
      options.complete = (response: any) => {
        if (this.interceptor.response) {
          const newResponse = this.interceptor.response(response);
          if (newResponse) {
            response = newResponse;
          }
        }

        const { statusCode, data } = response;
        if (statusCode === 200) {
          switch (data.code) {
            case 200:
              resolve(data);
              break;
            case 505:
              this.handleTokenError(data.errorMessage);
              break;
            case 2001:
            case 500:
              this.handleErrorMessage(data.errorMessage || '服务器错误');
              break;
            default:
              this.handleErrorMessage('服务器错误');
          }
        } else {
          this.handleHttpError(statusCode);
        }
      };

      uni.request(options);
    });
  }

  get(url: string, data?: any) {
	   console.log(url,data)
    return this.request(this.createOptions('GET', url, data));
  }

  post(url: string, data: any) {
	  console.log(url,data)
    return this.request(this.createOptions('POST', url, data));
  }

  put(url: string, data: any) {
    return this.request(this.createOptions('PUT', url, data));
  }

  delete(url: string, data: any) {
    return this.request(this.createOptions('DELETE', url, data));
  }
}

export default new ApiService();
