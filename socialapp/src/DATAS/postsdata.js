import image1 from '../images/images.jpg';
import image2 from '../images/blackadam.jpg';
import pic1 from '../images/ak.jpg';
import pic2 from '../images/Rock.jpg';
import image3 from '../images/CR.jpg';
import pic3 from '../images/CRZ.jpg';
import pic4 from '../images/user-2.png';

export const PostsData = [
  {
    id: 1,
    userId: 1,
    name: 'Ajith Kumar',
    picture: image1,
    profilePic: pic1,
    likes: 1000,
    hasLiked: false,
    verified: true,
    desc: "Let's make my film named Thunivu, a blockbuster and worldwide hit......",
  },
  {
    id: 2,
    userId: 2,
    name: 'Dwyane Johnson',
    picture: image2,
    profilePic: pic2,
    likes: 500,
    hasLiked: true,
    verified: true,
    desc: 'Do watch my movie Black Adam only on theatres.....',
  },
  {
    id: 3,
    userId: 3,
    name: 'Cristiano Ronaldo ',
    picture: image3,
    profilePic: pic3,
    likes: 10500,
    hasLiked: false,
    desc: 'Let me Rule this world!..',
    verified: true,
  },
  {
    id: 4,
    userId: 4,
    name: 'VISVA ',
    picture: image3,
    profilePic: pic4,
    likes: 100,
    hasLiked: true,
    verified: false,
    desc: 'Let me Rule this world!..',
  },
];
