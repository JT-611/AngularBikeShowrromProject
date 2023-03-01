import { Injectable } from '@angular/core';
import { userdetails } from 'src/models/userdetails';
import { product } from 'src/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService
{
  public usr?:userdetails[]=[];
  public prdt?:product[]=[]

  constructor()
  {
    this.usr =[{email:"sonu@abc.com",password:"st@123"}]

    // this.prdt=[
    //   {bkid:1,bkmd:'Pulser',bkengine:"125",bkclr:'black',avlqty:10,price:130000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/bajaj-pulser-180.png'},
    //   {bkid:2,bkmd:'Pulser',bkengine:"150",bkclr:'Black-Silver',avlqty:10,price:1290000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/bajaj-pulser-180.png'},
    //   {bkid:3,bkmd:'Hero',bkengine:"100",bkclr:'blue',avlqty:20,price:900000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/hero-blue.jpg'},
    //   {bkid:4,bkmd:'Hero-splender',bkengine:"120",bkclr:'red &Balck',avlqty:20,price:100000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/hero-splender-red.jpg'},
    //   {bkid:5,bkmd:'Honda',bkengine:"125",bkclr:'red',avlqty:20,price:120000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/shine.jpeg'},
    //   {bkid:6,bkmd:'Honda-Shine',bkengine:"200",bkclr:'black',avlqty:20,price:120000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/shine.jpeg'},
    //   {bkid:7,bkmd:'Royal-Enflied',bkengine:"350",bkclr:'Grey',avlqty:20,price:221000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/royal-350-grey.jpg'},
    //   {bkid:8,bkmd:'Royal-Enflied',bkengine:"500",bkclr:'DarkGreen',avlqty:20,price:250000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/royal-enfield-red.jpg'},
    //   {bkid:9,bkmd:'Royal-Enflied',bkengine:"350",bkclr:'NavyBlue',avlqty:20,price:350000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/royal-enfield-rider-bike-motor-bike.jpg'},
    //   {bkid:10,bkmd:'Royal-Enflied',bkengine:"648",bkclr:'Army Color',avlqty:20,price:300000,desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',image:'/assets/rolls-royce-phantom.jpg'}

    // ]
  }
}
