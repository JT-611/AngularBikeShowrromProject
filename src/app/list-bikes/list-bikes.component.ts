import { Component ,Output,EventEmitter ,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { product } from 'src/models/product';
import { ProductService } from '../service/product.service';
import { FilterProductPipe } from '../Filter/filter-product.pipe';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list-bikes',
  templateUrl: './list-bikes.component.html',
  styleUrls: ['./list-bikes.component.css']
})
export class ListBikesComponent implements OnInit
{

  constructor(private router: Router,private frmblder : FormBuilder , private api : ApiService)  {  }
  formValue ! : FormGroup;
  productObj : product = new product();
  productData !:any;
  showAdd !:boolean;
  showUpdate !:boolean;
  nm = ''
  ngOnInit(): void {
    this.formValue = this.frmblder.group({
      bkmd:[''],
      bkengine:[''],
      bkclr:[''],
      avlqty: [''],
      price: [''],
      desc:['']
    })
    this.getAllProduct();
    }

  getAllProduct()
  {
    this.api.getProduct()
      .subscribe(res=>{
        this.productData = res;
     })
  }


  deleteProduct(row : any)
  {
    this.api.deleteProduct(row.id)
      .subscribe(res=>{
        alert("Product Data Deleted..");
      this.getAllProduct()
      })
  }
  onEdit(row : any)
  {

    this.productObj.id = row.id;

    this.formValue.controls['bkmd'].setValue(row.bkmd);
    this.formValue.controls['bkengine'].setValue(row.bkengine)
    this.formValue.controls['bkclr'].setValue(row.bkclr)
    this.formValue.controls['avlqty'].setValue(row.avlqty)
    this.formValue.controls['price'].setValue(row.price)
    this.formValue.controls['desc'].setValue(row.desc)
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
      alert("Update Bike Data Succesfully!!")

      this.getAllProduct();

      // console.log(res);

      // this.router.navigate(['/list-bikes']);
    })

  }






}


  // --------------------------------------------------------------------

  // bkid?:any
  // @Output() deldata = new EventEmitter<product>();

  // bk ?:product[]=[]

  // constructor(private proserv :ProductService,private route: ActivatedRoute,private router: Router)
  // {
  //   this.bk=this.proserv.prdt;
  // }

  // searchText = ''

  // ondelete(id : any)
  // {

  //   console.log(id);
  //   this.proserv.prdt?.splice(id , 1);
  //   alert("Want to delete data ? ");
  // }

  // // ShowImages(prid:any)
  // // {
  // //     console.log(prid);
  // // }

  // onupdate(prid : any)
  // {

  //   console.log(prid);
  //   this.router.navigate(['/add-bikes',{bkid: prid}]);

  // }















