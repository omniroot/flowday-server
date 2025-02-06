import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.task.findMany();
  }

  getOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        createdAt: new Date(),
        completed: createTaskDto.completed,
      },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    console.log('Update', id, updateTaskDto);

    return this.prisma.task.update({
      where: {
        id: id,
      },
      data: {
        title: updateTaskDto.title,
        completed: updateTaskDto.completed,
      },
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
