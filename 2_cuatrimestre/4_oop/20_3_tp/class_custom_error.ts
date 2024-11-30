export class CustomError extends Error{
  /*s*
   * contructor
   */
  public constructor(pmessage?:string) {
    super(pmessage);
    this.name="CustomError";
  }

}