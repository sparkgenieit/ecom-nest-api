import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SurfaceFinishService {
  constructor(private prisma: PrismaService) { }

  create(data: any) {
    return this.prisma.finish.create({ data });
  }

  findAll() {
    return this.prisma.finish.findMany();
  }

  findOne(id: number) {
    return this.prisma.finish.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.finish.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.finish.delete({ where: { id } });
  }
}