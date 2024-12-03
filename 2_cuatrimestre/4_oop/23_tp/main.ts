import * as MB from "./class_menu_builder";

const menu= new MB.MealBuilder(MB.TypeMainCourse.fish,MB.TypeDrink.wather)
                                  .setAppetizer(MB.TypeAppetizer.caprese)
                                  .setSaladCourse(MB.TypeSaladCourse.garden)
                                  .setDessert(MB.TypeDessert.fruit)
                                  .build();
console.log(menu.getAppetizer());
console.log(menu.getMainCourse());
console.log(menu.getSaladCourse());
console.log(menu.getDessert());
console.log(menu.getDrink());
