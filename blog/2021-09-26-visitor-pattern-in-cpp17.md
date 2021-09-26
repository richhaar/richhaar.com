--- 
  slug: visitor-pattern-in-cpp17
  title: Using the Visitor pattern in C++17
  authors: rich
  tags: [C++] 
---

In C++17, the `std::variant` was introduced alongside the `std::visit` function which allows you to implement the Visitor pattern rather easily. To begin with I'll explain how to use the `std::variant` and how it fit's into the Visitor pattern.

<!--truncate--->

## Basic Usage

A `std::variant` is templated across multiple types, so that your variant can hold any one of those types. Have a look at the example below where the variant can hold either a `std::string` or an `int`.

```cpp title="std::variant example usage"
#include <variant>
#include <iostream>

int main()
{
    std::variant<int, std::string> myvariant = 0;

    int const num = std::get<int>(myvariant);
    std::cout << "My int is " << num << std::endl;

    myvariant = "zero";

    std::string const str = std::get<std::string>(myvariant);
    std::cout << "My string is " << str << std::endl;

    return 0;
}
```

```
My int is 0
My string is zero
```

:::caution
Calling `std::get` with the wrong type will throw an error.
:::

:::info Info
Similar to how TypeScript defines the types allowed for a given variable, a std::variant allows the usage of multiple types.
:::

## A Shapes Example

Here is a slightly more involved example, where three shapes are defined, with no common base class. And a vector is defined holding any of the three shapes.

```cpp title="A vector of variants"
#include <variant>
#include <iostream>
#include <vector>

class Circle
{
    double r_;
    public:
    Circle(int r) : r_(r) {};
    double getRadius() const { return r_; }
};

class Triangle
{
    double l_;
    public:
    Triangle(int l) : l_(l) {};
    double getLength() const { return l_; }
};

class Square
{
    double l_;
    public:
    Square(int l) : l_(l) {};
    double getLength() const { return l_; }
};

using Shape = std::variant<Circle, Triangle, Square>;

int main()
{
    std::vector<Shape> shapes {
        Triangle(3.0),
        Square(4.0),
        Circle(10.0)
    };

    return 0;
}
```

Now the visitor pattern is setup so that [to quote wikipedia](https://en.wikipedia.org/wiki/Visitor_pattern):

> It should be possible to define a new operation for (some) classes of an object structure without changing the classes.

So here is where `std::visit` comes into play, where an overloaded function can be applied to a `std::variant`. So for example we could use a lambda or define a struct that has an `operator()` defined for each type we need. For example:

```cpp title="Defining the function to apply to the variant"
#include <cmath>
// ...
// Previous shape code ommited
// ...
struct CalculateArea
{
    double operator()(Square const& sq)
    {
        return std::pow(sq.getLength(), 2.0);
    }

    double operator()(Circle const& c)
    {
        return 3.14159265359 * std::pow(c.getRadius(), 2.0);
    }

    double operator()(Triangle const& t)
    {
        return (std::sqrt(3.0) / 4.0) * std::pow(t.getLength(), 2);
    }
};
```
:::info Info
Triangle area is calculated based on an equilateral triangle
:::

And we can apply the function by using `std::visit` as follows:

```cpp
    for(auto& shape : shapes)
    {
       std::cout << "Area: " << std::visit(CalculateArea(), shape) << std::endl;
    }    
```

Giving us our result:

```
Area: 3.89711
Area: 16
Area: 314.159
```


### When to use the Visitor pattern?

The Visitor pattern can be useful when you need to constantly add new operations to your set of types. For example, now it would be possible to add another function making use of the shape's size without affecting the previous code (e.g.  a function `ValidShape` checking if the shape has a length or radius greater than zero). However adding new types may mean you have to revisit all your previous functions you have defined.


### Comparison to polymorphism

The typical Shape example consists of having a base class Shape which then has virtual functions such as `CalculateArea`. Then each class would have to implement the virtual function if it was pure virtual. Whereas with the Visitor pattern you can add functions to given classes as needed.

For more examples see cppreference:

* [std::visit](https://en.cppreference.com/w/cpp/utility/variant/visit)
* [std::variant](https://en.cppreference.com/w/cpp/utility/variant)
