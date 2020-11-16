import { Injectable } from '@angular/core';
import { isRegExp } from 'util';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrCategories: string[];
  posts: Post[];

  constructor() {

    this.arrCategories = ['Todas las categorias', 'futbol', 'baloncesto', 'tenis', 'videojuegos'];

    this.posts = [
      {
        title: 'Partido de la jornada',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugiat, voluptas repellat voluptatum nostrum illum est reiciendis harum dolores. Explicabo tenetur, voluptates repellendus accusantium optio qui dolorum asperiores corrupti enim?',
        author: 'Julio Maldini',
        image: 'https://pbs.twimg.com/profile_images/1217913077649367040/PGumVTcG_400x400.jpg',
        date: new Date,
        category: 'futbol'
      },
      {
        title: 'Mercado de fichajes',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugiat, voluptas repellat voluptatum nostrum illum est reiciendis harum dolores. Explicabo tenetur, voluptates repellendus accusantium optio qui dolorum asperiores corrupti enim?',
        author: 'Tomás Roncero',
        image: 'https://estaticos.sport.es/resources/jpg/1/8/1571906727681.jpg',
        date: new Date,
        category: 'futbol'
      },
      {
        title: 'Luka Doncic futura estrella',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugiat, voluptas repellat voluptatum nostrum illum est reiciendis harum dolores. Explicabo tenetur, voluptates repellendus accusantium optio qui dolorum asperiores corrupti enim?',
        author: 'Juanma López Iturriaga',
        image: 'https://3.bp.blogspot.com/-i-9KaSQxT90/UkoFXiGOQ1I/AAAAAAAAA5o/6A7UTmFmpJc/s1600/portada+itu.jpg',
        date: new Date,
        category: 'baloncesto'
      },
      {
        title: 'La nueva NBA',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugiat, voluptas repellat voluptatum nostrum illum est reiciendis harum dolores. Explicabo tenetur, voluptates repellendus accusantium optio qui dolorum asperiores corrupti enim?',
        author: 'Antoni Daimiel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Antoni_Daimiel_en_Valladolid_%282013%29.jpg/1200px-Antoni_Daimiel_en_Valladolid_%282013%29.jpg',
        date: new Date,
        category: 'baloncesto'
      },
      {
        title: 'PS5 vs XBOX SERIE X',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugiat, voluptas repellat voluptatum nostrum illum est reiciendis harum dolores. Explicabo tenetur, voluptates repellendus accusantium optio qui dolorum asperiores corrupti enim?',
        author: 'Antonio López',
        image: 'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
        date: new Date,
        category: 'videojuegos'
      },
      {
        title: 'Rafael Nadal sigue siendo el mejor del mundo',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugiat, voluptas repellat voluptatum nostrum illum est reiciendis harum dolores. Explicabo tenetur, voluptates repellendus accusantium optio qui dolorum asperiores corrupti enim?',
        author: 'Carlos Moyá',
        image: 'https://i.pinimg.com/originals/35/33/d2/3533d2232fe53ee2f73de91d97706f2d.jpg',
        date: new Date,
        category: 'tenis'
      },
      {
        title: 'Futuros juegos PS5',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugiat, voluptas repellat voluptatum nostrum illum est reiciendis harum dolores. Explicabo tenetur, voluptates repellendus accusantium optio qui dolorum asperiores corrupti enim?',
        author: 'María Fernandez',
        image: 'https://i.pinimg.com/originals/e8/b2/71/e8b271169214323595f5155a649884d2.jpg',
        date: new Date,
        category: 'videojuegos'
      }
    ]
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.posts);
    })
  }

  getByCategory(pCategory): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrFilterByCategory = this.posts.filter(post => {
        return post.category === pCategory;
      })
      resolve(arrFilterByCategory);
    })
  }

  addPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.posts.push(pPost);
      console.log(this.posts)
      resolve(this.posts)
    })
  }

  deletePost(pIndice: number) {
    this.posts.splice(pIndice, 1);
  }

}
