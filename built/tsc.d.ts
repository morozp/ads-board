declare module "greater" {
    const greater: (a: number, b: number) => number;
    export { greater };
}
declare module "greater-user" {
}
declare module "index" {
    import "greater-user";
}
