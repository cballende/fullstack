
import { Meal } from "./class_menu";

export enum TypeAppetizer{
  soup=0,
  caprese,
  none,
}
export enum TypeMainCourse{
  fish=0,
  duck,
  none,
}
export enum TypeSaladCourse{
  garden=0,
  greek,
  none,
}
export enum TypeDessert{
  chocolate=0,
  fruit,
  none,
}
export enum TypeDrink{
  wather=0,
  coke,
  none,
}

export class MealBuilder{
  private appetizer   :TypeAppetizer;
  private mainCourse  :TypeMainCourse;
  private saladCourse :TypeSaladCourse;
  private dessert     :TypeDessert;
  private drink       :TypeDrink;

  public constructor(pmainCourse:TypeMainCourse,pdrink:TypeDrink){
    this.appetizer = TypeAppetizer.none;
    this.mainCourse = pmainCourse;
    this.saladCourse = TypeSaladCourse.none;
    this.dessert = TypeDessert.none;
    this.drink = pdrink;
  }  
  
  public setAppetizer(pappetizer:TypeAppetizer){
    this.appetizer=pappetizer;
    return this;
  }
  public setMainCourse(pmainCourse:TypeMainCourse){
    this.mainCourse=pmainCourse;
    return this;
  }
  public setSaladCourse(psaladCourse:TypeSaladCourse){
    this.saladCourse=psaladCourse;
    return this;
  }
  public setDessert(pdessert:TypeDessert){
    this.dessert=pdessert;
    return this;
  }
  public setDrink(pdrink:TypeDrink){
    this.drink=pdrink;
    return this;
  }

  public build():Meal{
    return new Meal(this);
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