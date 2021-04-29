/**
 * 拍平数组
 * @param arr 
 * @param key 
 * @param remains 是否删除 children对应的属性
 * @returns 
 */
export function flatten<T extends Record<string, unknown>, K extends keyof T>(
	arr: T[],
	key: K,
	remains = true,
	result = []
): T[] {
	return arr.reduce((acc: any, cur) => {
		const { [key]: child, ...rest } = cur;
		if (Array.isArray(child)) {
			const _arr = remains ? cur: rest;  
			acc.push(_arr);
			return flatten(child as Record<string, unknown>[], key as any, remains ,  result);
		}
		acc.push(cur);
		return acc;
	}, result) as T[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop(){}