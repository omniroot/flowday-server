import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { getCurrentDate } from '../utils/getCurrentDate.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

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
        ...createTaskDto,
        createdAt: getCurrentDate(),
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
