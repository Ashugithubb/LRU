import {
  IsString,
  IsInt,
  Min,
  IsStrongPassword,
  IsEmail,
  IsPhoneNumber,
  IsEnum,
  IsUrl,
  IsNotEmpty,
  IsDate,
  IsOptional,
  IsPostalCode,
  ValidateNested,
  IsNumber,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { BaseDTO } from 'src/Dynamic_lru/repo.services'; // Adjust path as per your structure

// Address DTO
export class AddressDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  street: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toLowerCase())
  city: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toUpperCase())
  state: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toUpperCase())
  country: string;

  @IsPostalCode('any')
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  postalCode: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  landmark?: string;
}

// User DTO
export class CreateUserDto implements BaseDTO {
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  uid: number;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.trim())
  email: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsEnum(["Male", "Female", "Other"])
  gender: "Male" | "Female" | "Other";

  @IsStrongPassword()
  password: string;

  @IsPhoneNumber()
  phone: string;

  @IsEnum(["User", "Admin"])
  role: "User" | "Admin";

  @IsUrl()
  @IsOptional()
  @Transform(({ value }) => value.trim())
  avatar: string;

  @IsOptional()
  bio: string = "Add Your Bio";

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}

// Product DTO
export class Productdto implements BaseDTO {
  @IsNumber()
  id: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  productName: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  discount: string;
}



/*
{
  "uid": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 28,
  "gender": "Male",
  "password": "Str0ngP@ssword!",
  "phone": "+919999999999",
  "role": "User",
  "avatar": "https://example.com/avatar.jpg",
  "created_at": "2025-06-19T08:00:00.000Z",
  "bio": "Software engineer passionate about backend.",
  "Adress": {
    "street": "123 Main Street",
    "city": "Bangalore",
    "state": "KA",
    "country": "IN",
    "postalCode": "560001",
    "landmark": "Near MG Road"
  }
}

*/

/*
{
  "id":1,
  "productName":"Phone",
  "price":15000,
  "discount":"20%"
}

*/


/*{
  "name": "Ashu",
  "age": 25,
  "Task": [
    {
      "title": "Task 3"
    },
    {
      "title": "Task 3"
    }
  ]
}*/

