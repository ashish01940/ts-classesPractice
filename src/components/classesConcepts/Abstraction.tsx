/* Abstraction is modeling or providing or implementing interfaces in classes so that
it creates a seperation of duties in class  */
/* for ex we r bound to use engine method in (mercedes and audi) and return type should be string but not in 
sportscar  */

export interface sportsCar {
  engine(): string;
}
class car {
  doors: number = 4;
  constructor(doors: number) {
    this.doors = doors;
  }
}

class mercedes extends car implements sportsCar {
  constructor(doors: number) {
    super(doors)
  }
  engine(): string {
    return "this method is typed in interface"
  }
}

class Audi extends mercedes {
  constructor(doors: number) {
    super(doors)
  }
  engine(): string {
    return "this will automatically recieve the interface of mercedes"
  }
}

