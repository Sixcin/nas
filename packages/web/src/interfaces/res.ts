export default interface Res<T> {
  status: number;
  data: T;
  message?: string;
}
