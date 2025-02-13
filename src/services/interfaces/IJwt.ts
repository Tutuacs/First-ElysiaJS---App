export interface IJwt {
    sign(payload: string): string;
    verify(token: string): string;
}