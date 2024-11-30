export class CustomError extends Error{
  /*s*
   * contructor
   */
  public constructor(pmessage?:string) {
    super(pmessage);
    /* type Error */
    this.name="CustomError";
  }

}