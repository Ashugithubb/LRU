import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Repo } from './repo.services';
import { CreateUserDto, Productdto } from './dto/user.dto';
import { TaskDto } from './dto/task.dto';

@Controller('dynamic')
export class RepoController {
  constructor(private readonly repo: Repo) {}

  //  USER 
  @Post('user')
  createUser(@Body() user: CreateUserDto) {
    return this.repo.create(user);
  }

  @Get('user')
  getUsers() {
    return this.repo.getAll('user');
  }

  @Get('user/:id')
  getUser(@Param('id') id: string) {
    return this.repo.search('user', Number(id));
  }

  @Put('user/:id')
  updateUser(@Param('id') id: string, @Body() user: Partial<CreateUserDto>) {
    return this.repo.update('user', Number(id), user);
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id: string) {
    return this.repo.delete('user', Number(id));
  }

  @Post('user/upsert')
  upsertUser(@Body() user: CreateUserDto) {
    return this.repo.upsert(user);
  }

  //  PRODUCT 
  @Post('product')
  createProduct(@Body() product: Productdto) {
    return this.repo.create(product);
  }

  @Get('product')
  getProducts() {
    return this.repo.getAll('product');
  }

  @Get('product/:id')
  getProduct(@Param('id') id: string) {
    return this.repo.search('product', Number(id));
  }

  @Put('product/:id')
  updateProduct(@Param('id') id: string, @Body() product: Partial<Productdto>) {
    return this.repo.update('product', Number(id), product);
  }

  @Delete('product/:id')
  deleteProduct(@Param('id') id: string) {
    return this.repo.delete('product', Number(id));
  }

  @Post('product/upsert')
  upsertProduct(@Body() product: Productdto) {
    return this.repo.upsert(product);
  }

  //  TASK
  @Post('task')
  createTask(@Body() task: TaskDto) {
    return this.repo.create(task);
  }

  @Get('task')
  getTasks() {
    return this.repo.getAll('task');
  }

  @Get('task/:id')
  getTask(@Param('id') id: string) {
    return this.repo.search('task', Number(id));
  }

  @Put('task/:id')
  updateTask(@Param('id') id: string, @Body() task: Partial<TaskDto>) {
    return this.repo.update('task', Number(id), task);
  }

  @Delete('task/:id')
  deleteTask(@Param('id') id: string) {
    return this.repo.delete('task', Number(id));
  }

  @Post('task/upsert')
  upsertTask(@Body() task: TaskDto) {
    return this.repo.upsert(task);
  }
  

}












// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { CreateUserDto, Productdto } from 'src/Eocommerce/dto/user.dto';
// import { Repo } from './repo.services';


// @Controller('dynamic')
// export class RepoController {
//   constructor(private readonly repo: Repo) {}

//   @Post('user')
//   createUser(@Body() user: CreateUserDto) {
//     return this.repo.create(user);
//   }

//   @Post('product')
//   createProduct(@Body() product: Productdto) {
//     return this.repo.create(product);
//   }

//   @Get('user')
//   getUsers() {
//     return this.repo.getAll('user');
//   }

//   @Get('product')
//   getProducts() {
//     return this.repo.getAll('product');
//   }
// }
