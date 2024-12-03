import * as M from "./class_menu_builder";

export class Meal {

  private appetizer   :M.TypeAppetizer;
  private mainCourse  :M.TypeMainCourse;
  private saladCourse :M.TypeSaladCourse;
  private dessert     :M.TypeDessert;
  private drink       :M.TypeDrink;

  constructor(mealBuilder:M.MealBuilder){
    this.appetizer = mealBuilder.getAppetizer();
    this.mainCourse = mealBuilder.getMainCourse();
    this.saladCourse = mealBuilder.getSaladCourse();
    this.dessert = mealBuilder.getDessert();
    this.drink = mealBuilder.getDrink();
  }
  
  public getAppetizer(){
    return this.appetizer;
  }
  public getMainCourse(){
    return this.mainCourse;
  }
  public getSaladCourse(){
    return this.saladCourse;
  }
  public getDessert(){
    return this.dessert;
  }
  public getDrink(){
    return this.drink;
  }

}