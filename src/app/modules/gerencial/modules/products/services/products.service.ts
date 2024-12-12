import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private data: ProductResponse[] = [
    {
      id: '1',
      name: 'Fogão Industrial 6 Bocas',
      description: 'Fogão industrial de alta pressão com 6 bocas, ideal para cozinhas de grande porte.',
      imageUrl: 'https://www.araceba.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2022-03-01_at_10.35.38.jpeg',
      stock: 1,
      createdAt: '01/03/2024',
      updatedAt: '01/03/2024',
    },
    {
      id: '2',
      name: 'Coifa Industrial Inox',
      description: 'Coifa em aço inox para exaustão de fumaça e vapores em cozinhas industriais.',
      imageUrl: 'https://wtinox.ind.br/wp-content/uploads/2021/05/coifa-quatro-aguas-inox.jpg',
      stock: 2,
      createdAt: '01/03/2024',
      updatedAt: '01/03/2024',
    },
    {
      id: '3',
      name: 'Forno Combinado',
      description: 'Forno combinado com vapor e convecção, perfeito para assar e cozinhar alimentos.',
      imageUrl: 'https://atau.vtexassets.com/arquivos/ids/158058/5156891018-0.jpg',
      stock: 3,
      createdAt: '02/03/2024',
      updatedAt: '02/03/2024',
    },
    {
      id: '4',
      name: 'Liquidificador Industrial 10L',
      description: 'Liquidificador industrial de alta potência com capacidade para 10 litros.',
      imageUrl: 'https://cdn.dooca.store/2101/products/2024944727-1sz.jpg?v=1638389998',
      stock: 4,
      createdAt: '02/03/2024',
      updatedAt: '02/03/2024',
    },
    {
      id: '5',
      name: 'Balança Digital 50kg',
      description: 'Balança digital com capacidade de até 50kg, ideal para pesagem precisa.',
      imageUrl: 'https://www.dutramaquinas.com.br/shared/img/produto/alta/88898_balanca_digital_com_plataforma_capacidade_50_kg_dp50p.jpg',
      stock: 5,
      createdAt: '03/03/2024',
      updatedAt: '03/03/2024',
    },
    {
      id: '6',
      name: 'Chapa de Lanche',
      description: 'Chapa de ferro fundido para preparo de lanches e grelhados.',
      imageUrl: 'https://www.lojasebem.com.br/img/products/chapa-sanduicheira-para-lanches-a-gas-profissional-com-prensa-para-pao-70-cm-metalcubas-mgg-70_1_1200.jpg',
      stock: 6,
      createdAt: '04/03/2024',
      updatedAt: '04/03/2024',
    },
  ];

  public findAll(): Observable<ProductResponse[]> {
    return of(this.data);
  }

  public findById(id: string): Observable<ProductResponse> {
    const Product = this.data.find((Product) => Product.id === id);

    return of(Product || {} as ProductResponse);
  }
}

export type ProductResponse = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}
