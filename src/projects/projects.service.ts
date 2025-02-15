import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.project.findMany();
  }

  getOne(id: number) {
    return this.prisma.project.findUnique({
      where: {
        id,
      },
    });
  }

  // create(createProjectDto: CreateProjectDto) {
  //   return 'This action adds a new project';
  // }

  // update(id: number, updateProjectDto: UpdateProjectDto) {
  //   return `This action updates a #${id} project`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} project`;
  // }
}
