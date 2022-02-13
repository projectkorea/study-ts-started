type A = string | number;
// An interface can only extend an object type;
// or intersection of object types with statically known members
interface StrOrNum extends A {
  a: string;
}
