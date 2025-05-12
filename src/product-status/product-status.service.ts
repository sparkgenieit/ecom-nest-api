import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductStatusService {
  constructor(private prisma: PrismaService) { }

  create(data: any) {
    return this.prisma.productStatus.create({ data });
  }

  findAll() {
    return this.prisma.productStatus.findMany();
  }

  findOne(id: number) {
    return this.prisma.productStatus.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.productStatus.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.productStatus.delete({ where: { id } });
  }
}