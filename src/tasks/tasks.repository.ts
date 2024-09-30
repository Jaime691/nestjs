import { DataSource, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepository extends Repository<TaskEntity> {
  constructor(dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }
}
