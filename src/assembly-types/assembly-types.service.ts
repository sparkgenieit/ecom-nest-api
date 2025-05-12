import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssemblyTypesService {
  constructor(private prisma: PrismaService) {}

  create(data: { name: string }) {
    return this.prisma.assemblyType.create({ data });
  }

  findAll() {
    return this.prisma.assemblyType.findMany();
  }

  findOne(id: number) {
    return this.prisma.assemblyType.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.assemblyType.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.assemblyType.delete({ where: { id } });
  }
}