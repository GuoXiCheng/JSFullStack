# 属性描述符

## 什么是属性描述符

属性描述符用于定义或修改对象属性的详细行为，属性描述符为对象的属性提供了额外的配置选项，例如是否可枚举、是否可写、是否可配置等。

属性描述符主要分为：**数据描述符**和**访问器描述符**。

要修改属性描述符，必须使用`Object.defineProperty()`方法。

## 数据描述符

数据描述符有四个属性：value、writable、enumerable、configurable。

<<< @/../projects/javascript-sandbox/src/object/property-descriptor.ts#data-attribute

## 访问器描述符

访问器描述符有四个属性：get、set、enumerable、configurable。

<<< @/../projects/javascript-sandbox/src/object/property-descriptor.ts#accessor-attribute

## 定义多个属性

要通过多个描述符一次性定义多个属性，可以使用`Object.defineProperties()`方法。

<<< @/../projects/javascript-sandbox/src/object/property-descriptor.ts#define-multiple-attributes

## 获取属性描述符

要获取对象的属性描述符，可以使用`Object.getOwnPropertyDescriptor()`方法。

<<< @/../projects/javascript-sandbox/src/object/property-descriptor.ts#get-property-descriptor

## 获取所有属性描述符

要获取对象的所有属性描述符，可以使用`Object.getOwnPropertyDescriptors()`方法。

<<< @/../projects/javascript-sandbox/src/object/property-descriptor.ts#get-property-descriptors
