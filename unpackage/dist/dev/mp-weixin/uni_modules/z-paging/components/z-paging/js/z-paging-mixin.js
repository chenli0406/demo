"use strict";
const ZPMixin = {
  onPullDownRefresh() {
    if (this.isPagingRefNotFound())
      return;
    this.$refs.paging.reload().catch(() => {
    });
  },
  onPageScroll(e) {
    if (this.isPagingRefNotFound())
      return;
    this.$refs.paging.updatePageScrollTop(e.scrollTop);
    e.scrollTop < 10 && this.$refs.paging.doChatRecordLoadMore();
  },
  onReachBottom() {
    if (this.isPagingRefNotFound())
      return;
    this.$refs.paging.pageReachBottom();
  },
  methods: {
    isPagingRefNotFound() {
      return !this.$refs.paging;
    }
  }
};
exports.ZPMixin = ZPMixin;
