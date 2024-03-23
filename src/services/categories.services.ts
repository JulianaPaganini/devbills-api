import { Category } from "../entities/category.entity";

export class CategoriesService {
    //toda instancia dessa classe pode acessar esse público. senão teria que encapsular, antes do async colocando um privite.
    // o async irá fazer uma chamad aexterna, chamando o banco de dados, criando uma função que terá uma promisse devolvendo uma category. 
    // se quero que um dado fique de um jeito, uma cor ele precisa ser adicionado na entidade. 
    async create() : Promise<Category> {
            const category = new Category({

                    title: 'Example Category',
                    color: '#ff33bb',

            });
            return category;
    }

};