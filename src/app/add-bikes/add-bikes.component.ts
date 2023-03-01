import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { product } from 'src/models/product';
import { ProductService } from '../service/product.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-bikes',
  templateUrl: './add-bikes.component.html',
  styleUrls: ['./add-bikes.component.css']
})
export class AddBikesComponent implements OnInit
{
  formValue ! : FormGroup;
  productObj : product = new product();
  productData !:any;
  showAdd !:boolean;
  showUpdate !:boolean;


  constructor(private router: Router,private frmblder : FormBuilder , private api : ApiService)  {  }



  ngOnInit(): void {
    this.formValue = this.frmblder.group({
      bkmd:[''],
      bkengine:[''],
      bkclr:[''],
      avlqty: [''],
      price: [''],
      desc:[''],
    })
    this.getAllProduct();

  }

    postProductDetails()
  {
    this.productObj.bkmd = this.formValue.value.bkmd;
    this.productObj.bkengine = this.formValue.value.bkengine;
    this.productObj.bkclr = this.formValue.value.bkclr;
    this.productObj.avlqty= this.formValue.value.avlqty;
    this.productObj.price = this.formValue.value.price;
    this.productObj.desc = this.formValue.value.desc;
    // this.productObj.image = this.formValue.value.image;


    this.api.postProduct(this.productObj).subscribe(res=>{
      console.log(res);
      alert("Product added Succesfully!!")

      this.getAllProduct();

      this.router.navigate(['/list-bikes']);

    },
    err=>{
      alert("something went wrong!!!");
    })

  }
  getAllProduct()
  {
    this.api.getProduct()
      .subscribe(res=>{
        this.productData = res;
     })
  }

  onEdit(row : any)
  {

    alert(row.id);
    this.api.getProduct().subscribe(res=>{this.productData.bkmd})
    // this.formValue.controls['bkmd'].setValue(row.bkmd)
    // this.formValue.controls['bkengine'].setValue(row.bkengine)
    // this.formValue.controls['bkclr'].setValue(row.bkclr)
    // this.formValue.controls['avlqty'].setValue(row.avlqty)
    // this.formValue.controls['price'].setValue(row.price)
    // this.formValue.controls['desc'].setValue(row.desc)

  }


  updateProductDetails()
  {
    this.productObj.bkmd = this.formValue.value.bkmd;
    this.productObj.bkengine = this.formValue.value.bkengine;
    this.productObj.bkclr = this.formValue.value.bkclr;
    this.productObj.avlqty= this.formValue.value.avlqty;
    this.productObj.price = this.formValue.value.price;
    this.productObj.desc = this.formValue.value.desc;
    // this.productObj.image = this.formValue.value.image;


    this.api.updateProduct(this.productObj,this.productObj.id).subscribe(res=>{
      alert("Update Product Data Succesfully!!")

      this.getAllProduct();

      this.router.navigate(['/list-bikes']);
    })

  }



}

  // -----------------------------------------------------------------------------
//   data?:any
//   pt?:any

//   constructor(private route: ActivatedRoute,private router: Router,private proserv :ProductService){
//     // this.data = this.myserv.cat;
//   }
//   addbikeform={
//   bkid:0,
//   bkmd:'',
//   bkengine:'',
//   bkclr:'',
//   avlqty:0,
//   price:0,
//   desc:'',
//   image:''
// }
// addBike(){
//  this.pt =  {
//         bkid:this.addbikeform.bkid,
//         bkmd:this.addbikeform.bkmd,
//         bkengine:this.addbikeform.bkengine,
//         bkclr:this.addbikeform.bkclr,
//         avlqty:this.addbikeform.avlqty,
//         price:this.addbikeform.price,
//         desc:this.addbikeform.desc,
//         image:this.addbikeform.image
// }

//   console.log(this.pt);
//   this.proserv.prdt?.push(this.pt);

//   this.router.navigate(['/bike-details']);

//   let productid = this.route.snapshot.paramMap.get("bkid");
//   console.log(productid);

// }

