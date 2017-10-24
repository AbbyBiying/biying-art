import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable, of as observableOf, merge } from 'rxjs';

import { map, filter, scan } from 'rxjs/operators';

export interface ArtworkTableItem {
  name: string;
  id: number;
  material: string;
  size: string;
}

export const ARTWORK_DATA: ArtworkTableItem[] = [
  {id: 1, name: 'Alienation No.1', material: 'acrylic on paper', size: '18 x 24 inches (45 x 60 cm)'},
  {id: 2, name: 'Alienation No.2', material: 'acrylic on paper', size: '23 x 18 inches (59 x 45 cm)'},
  {id: 3, name: 'Alienation No.3', material: 'acrylic on paper', size: '20 x 20 inches (51 x 46 cm)'},
  {id: 4, name: 'Alienation No.4', material: 'acrylic on paper', size: '18 x 14 inches (46 x 36 cm)'},
  {id: 5, name: 'Alienation No.5', material: 'acrylic on paper', size: '16 x 22 inches (40 x 57 cm)'},
  {id: 6, name: 'Alienation No.6', material: 'acrylic on paper', size: '24 x 18 inches (60 x 46 cm)'},
  {id: 7, name: 'Alienation No.7', material: 'acrylic on paper', size: '24 x 18 inches (60 x 45.5 cm)'},
  {id: 8, name: 'Alienation No.8', material: 'acrylic on paper', size: '24 x 18 inches (60 x 45 cm)'},
  {id: 9, name: 'Alienation No.9', material: 'acrylic on paper', size: '26 x 20 inches (66 x 51 cm)'},
  {id: 10, name: 'Alienation No.10', material: 'acrylic on paper', size: '27 x 24 inches (69 x 61 cm)'},
  {id: 11, name: 'Alienation No.11', material: 'acrylic on paper', size: '22 x 18 inches (57 x 46 cm)'},
  {id: 12, name: 'Alienation No.12', material: 'acrylic on paper', size: '31 x 22 inches (78 x 55 cm)'},
  {id: 13, name: 'Alienation No.13', material: 'acrylic on paper', size: '31 x 22 inches (78 x 55 cm)'},
  {id: 14, name: 'Alienation No.14', material: 'acrylic on paper', size: '31 x 22 inches (78 x 55 cm)'},
  {id: 15, name: 'Alienation No.15', material: 'acrylic on paper', size: '31 x 22 inches (78 x 55 cm)'},
  {id: 16, name: 'Alienation No.16', material: 'acrylic on paper', size: '31 x 22 inches (78 x 55 cm)'},
  {id: 17, name: 'Alienation No.17', material: 'acrylic on paper', size: '31 x 22 inches (78 x 55 cm)'},
  {id: 18, name: 'Alienation No.18', material: 'acrylic on paper', size: '72 x 72 inches (180 x 180 cm)'},
  {id: 19, name: 'Alienation No.19', material: 'acrylic on paper', size: '40 x 33 inches (100 x 86 cm)'},
  {id: 20, name: 'Alienation No.20', material: 'acrylic on paper', size: '36 x 36 inches (90 x 90 cm)'},
  {id: 21, name: 'Alienation No.21', material: 'acrylic on paper', size: '40 x 40 inches (100 x 100 cm)'},
  {id: 22, name: 'Alienation No.22', material: 'acrylic on paper', size: '31 x 22 inches (78 x 55 cm)'},
  {id: 23, name: 'Alienation No.23', material: 'oil on canvas', size: '72 x 72 inches (180 x 180 cm)'},
  {id: 24, name: 'Alienation No.24', material: 'acrylic on paper', size: ''},
  {id: 25, name: 'Alienation No.26', material: 'acrylic on paper', size: ''},
  {id: 26, name: 'Alienation No.30', material: 'acrylic on paper', size: ''},
  {id: 27, name: 'Alienation No.33', material: 'acrylic on paper', size: ''},
  {id: 28, name: 'Alienation No.34', material: 'acrylic on paper', size: ''},

  {id: 29, name: 'Firework No.1', material: 'oil on canvas', size: '31 1/2 x 42 1/2 inches (107 x 80 cm)'},
  {id: 30, name: 'Firework No.2', material: 'oil on canvas', size: '41 x 32 inches (105 x 82 cm)'},
  {id: 31, name: 'Firework No.3', material: 'oil on canvas', size: ''},
  {id: 32, name: 'Firework No.4', material: 'oil on canvas', size: ''},

  {id: 33, name: 'The Biggest Blue', material: 'oil on canvas', size: '40 x 40 inches (182 x 182 cm)'},
  {id: 34, name: 'Smoke', material: 'oil on canvas', size: '48 x 49 inches (123 x 125 cm)'},
  {id: 35, name: 'Purple', material: 'oil on canvas', size: '14 x 16 inches (36 x 41 cm)'},
  {id: 36, name: 'Sick', material: 'oil on canvas', size: '24 x 24 inches (61 x 61 cm)'},
  {id: 37, name: 'Small Dream', material: 'oil on canvas', size: '36 x 36 inches (91 x 91 cm)'},
  {id: 38, name: 'The Harder You Fall', material: 'oil on canvas', size: '43 x 48 inches (109 x 122 cm)'},
  {id: 39, name: 'Tunnel', material: 'oil on canvas', size: '57 x 57 inches (145 x 146 cm)'},
  {id: 40, name: 'Big Dream', material: 'oil on canvas', size: '22 x 21 inches (56 x 53 cm)'},
  {id: 41, name: 'Black', material: 'oil on canvas', size: ''},
  {id: 42, name: 'Chandeliers', material: 'oil on canvas', size: '44 x 29 1/2 inches (111 x 75 cm)72 x 72 inches (180 x 180 cm)'},
  {id: 43, name: 'Parked', material: 'oil on canvas', size: '24 x 28 inches (61 x 71 cm)'},
  {id: 44, name: 'Pink', material: 'acrylic on paper', size: ''},
  {id: 45, name: 'Light', material: 'oil on canvas', size: ''},
  {id: 46, name: 'Face', material: 'oil on canvas', size: ''},
  {id: 47, name: 'Wish You Were Here', material: 'acrylic on paper', size: ''},
  {id: 48, name: 'Crack', material: 'oil on canvas', size: ''},
  {id: 49, name: 'Beard', material: 'oil on canvas', size: ''},
  {id: 50, name: 'Eye', material: 'oil on canvas', size: ''},
  {id: 51, name: 'Head', material: 'oil on canvas', size: ''},

  {id: 52, name: 'Ceramic No.1', material: '', size: ''},
  {id: 53, name: 'Ceramic No.4', material: '', size: ''},
  {id: 54, name: 'Ceramic No.5', material: '', size: ''},
  {id: 55, name: 'Ceramic No.6', material: '', size: ''},
  {id: 56, name: 'Ceramic No.7', material: '', size: ''},
  {id: 57, name: 'Ceramic No.9', material: '', size: ''},
  {id: 58, name: 'Ceramic No.10', material: '', size: ''},
  {id: 59, name: 'Ceramic No.13', material: '', size: ''},
  {id: 60, name: 'Ceramic No.14', material: '', size: ''},
  {id: 61, name: 'Ceramic No.15', material: '', size: ''},
  {id: 62, name: 'Ceramic No.16', material: '', size: ''},
  {id: 63, name: 'Black T Shirt Pyramid No.1', material: '', size: ''},
  {id: 64, name: 'Protea Man No.2', material: '', size: ''},
  {id: 65, name: 'Space Shirt', material: '', size: ''},
  {id: 66, name: 'Black Purple Shirt', material: '', size: ''},
  {id: 67, name: 'Black Shirt No.2', material: '', size: ''},
  {id: 68, name: 'White T Shirt Pyramid No.1', material: '', size: ''},
  {id: 69, name: 'Dress No.1', material: '', size: ''},
  {id: 70, name: 'Dress No.2', material: '', size: ''},
  {id: 71, name: 'Dress No.3', material: '', size: ''},
  {id: 72, name: 'Protea Woman No.1', material: '', size: ''},
  {id: 73, name: 'Black Rat No.1', material: '', size: ''},  
  {id: 74, name: 'Black Red Hat No.1', material: '', size: ''},  
  {id: 75, name: 'Red Hat No.1', material: '', size: ''},
  {id: 76, name: 'Alienation No.3', material: '', size: '20 x 20 inches (51 x 46 cm)'}
];

