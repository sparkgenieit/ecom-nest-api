import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WarrantiesService {
  constructor(private prisma: PrismaService) { }

  create(data: any) {
    return this.prisma.warranty.create({ data });
  }

  findAll() {
    return this.prisma.warranty.findMany();
  }

  findOne(id: number) {
    return this.prisma.warranty.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.warranty.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.warranty.delete({ where: { id } });
  }
}