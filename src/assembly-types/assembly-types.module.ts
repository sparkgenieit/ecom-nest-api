import { Module } from '@nestjs/common';
import { AssemblyTypesService } from './assembly-types.service';
import { AssemblyTypesController } from './assembly-types.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AssemblyTypesService],
  controllers: [AssemblyTypesController],
})
export class AssemblyTypesModule {}