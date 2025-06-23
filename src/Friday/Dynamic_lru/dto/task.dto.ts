import { Transform, Type } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from "class-validator";
import { BaseDTO } from "src/Friday/Dynamic_lru/repo.services";


export class TaskDto implements BaseDTO {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsDate()
  @Type(() => Date)
  start: Date = new Date();

  @IsDate()
  @Type(() => Date)
  end: Date = new Date(this.start.getTime());
}


export class UserDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  @ValidateNested({ each: true })
  @Type(() => TaskDto)
  @ArrayUnique((task: TaskDto) => task.title, {
    message: 'Task title must be unique!',
  })
  Task: TaskDto[];
}
