interface Animal {
  eat: () => void;
  sleep: () => void;
}

class Dog implements Animal {
  eat() {}
  sleep() {}
}
