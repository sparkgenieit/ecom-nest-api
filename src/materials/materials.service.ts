import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MaterialsService {
  constructor(private prisma: PrismaService) { }

  create(data: any) {
    return this.prisma.material.create({ data });
  }

  findAll() {
    return this.prisma.material.findMany();
  }

  findOne(id: number) {
    return this.prisma.material.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.material.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.material.delete({ where: { id } });
  }
}