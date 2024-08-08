export default interface BaseQuery<E> {
	key: string,
	current: number,
	limit: number,
	entity?: E
}
