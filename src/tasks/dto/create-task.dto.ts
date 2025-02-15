import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;

  @IsString()
  priority: 'low' | 'medium' | 'high';

  @IsString()
  difficult: 'easy' | 'medium' | 'hard';

  @IsString()
  dateStart: string; // "10.02.2025"

  @IsString()
  dateEnd: string; // "15.02.2025"

  @IsString()
  timeStart: string; // "12:00"

  @IsString()
  timeEnd: string; // "15:00"

  // @IsString()
  // createdAt: string; // Date
}
