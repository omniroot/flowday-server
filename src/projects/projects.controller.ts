import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service.js';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAll() {
    return this.projectsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.projectsService.getOne(+id);
  }

  // @Post()
  // create(@Body() createProjectDto: CreateProjectDto) {
  //   return this.projectsService.create(createProjectDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
  //   return this.projectsService.update(+id, updateProjectDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.projectsService.remove(+id);
  // }
}
