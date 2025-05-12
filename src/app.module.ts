// src/app.module.ts

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { VendorsModule } from './vendors/vendors.module';
import { AssemblyTypesModule } from './assembly-types/assembly-types.module';
import { FeatureTypesModule } from './feature-types/feature-types.module';
import { FilterTypesModule } from './filter-types/filter-types.module';
import { ColorsModule } from './colors/colors.module';
import { SurfaceFinishModule } from './surface-finishes/surface-finish.module'; 
import { LocationsModule } from './locations/locations.module';
import { MaterialsModule } from './materials/materials.module';
import { ProductStatusModule } from './product-status/product-status.module';
import { RoomTypesModule } from './room-types/room-types.module';
import { ShippingPartnersModule } from './shipping-partners/shipping-partners.module';
import { SizeUOMModule } from './size-uom/size-uom.module';
import { StylesModule } from './styles/styles.module';
import { TaxRulesModule } from './tax-rules/tax-rules.module';
import { WarrantiesModule } from './warranties/warranties.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    BrandsModule,
    CategoriesModule,
    VendorsModule,
    AssemblyTypesModule,
    FeatureTypesModule,
    FilterTypesModule,
    ColorsModule,
    SurfaceFinishModule,
    LocationsModule,
    MaterialsModule,
    ProductStatusModule,
    RoomTypesModule,
    ShippingPartnersModule,
    SizeUOMModule,
    StylesModule,
    TaxRulesModule,
    WarrantiesModule,
  ],
})
export class AppModule {}