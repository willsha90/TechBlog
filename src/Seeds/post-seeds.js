const { Post } = require('../models');

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec suscipit nulla. Proin commodo magna vitae dolor aliquam, vitae tristique nisi tempor. Nulla pretium purus ac nibh venenatis bibendum. Nullam viverra eu neque at pulvinar. Nam gravida id tellus non rhoncus. Donec eleifend, felis quis suscipit convallis, ante purus molestie erat, vel condimentum magna sem et mi. Etiam sed nibh turpis.

Donec faucibus maximus suscipit. Cras quis lorem odio. Nulla ultricies erat sit amet elementum aliquet. Mauris rutrum vitae odio sed finibus. Aliquam congue ligula nunc. Sed in augue pretium, aliquam magna eget, luctus lacus. Suspendisse volutpat tellus erat, eu elementum augue lacinia eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque faucibus porta ligula sit amet pharetra. Fusce vehicula lorem sed nisi porta, non tincidunt tellus feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum euismod sem fermentum mauris finibus vestibulum. Vivamus ut viverra nunc. Fusce euismod fringilla leo at interdum. Nullam nec est nec risus sodales tincidunt.

Quisque tellus urna, tempor non diam non, condimentum dignissim enim. Quisque laoreet mi eget sodales blandit. Curabitur vehicula, mauris sit amet fringilla bibendum, sem risus facilisis mauris, gravida viverra felis justo ac dui. Sed id orci congue, facilisis justo vel, lacinia arcu. Aliquam odio est, placerat vitae dapibus nec, laoreet sed nunc. Fusce elit felis, fringilla a condimentum vitae, dignissim vel enim. Phasellus in cursus massa. Curabitur rutrum ipsum vel sem laoreet, vitae suscipit dolor pulvinar. Aliquam sed tellus ante. Curabitur ornare tellus a turpis sollicitudin porttitor. Etiam felis enim, pretium quis libero a, tristique ornare ex. Cras sodales at dui ac efficitur. Morbi ac dolor at neque aliquam dictum molestie eu nibh. Maecenas ullamcorper, tellus iaculis semper aliquet, diam libero dictum nunc, eu hendrerit diam nisl dapibus mauris. Nullam volutpat quis mi in gravida.

Morbi sit amet ex nec turpis varius viverra. Integer mattis dolor odio, quis sagittis arcu blandit eleifend. Nulla a ultrices nisi. In at massa purus. Aliquam convallis massa vitae efficitur lobortis. Curabitur venenatis mauris nunc, a malesuada lectus lobortis in. Nullam ultricies nec purus sed condimentum. Curabitur leo ligula, aliquam tincidunt ultrices ut, ullamcorper in mauris. Vestibulum rutrum mi non vehicula consequat. Sed et dignissim leo, non accumsan velit. Fusce efficitur mauris eget quam finibus suscipit. In faucibus ut tortor quis auctor. Nulla faucibus lacus enim, semper suscipit purus bibendum nec. Nam lacinia tempor urna eget eleifend.
`;

const postData = [
  {
    title: 'My First   post (user 1)',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro omnis vel, vitae adipisci numquam sint. Placeat iste nemo cupiditate, reprehenderit commodi, porro, quibusdam cumque error laborum eos beatae quam.',
    creator_id: 1,
    creation_date: 03/15/2021 
  },
  {
    title: 'My First Blog post (user 2): a more verbose title',
    content: 'Iure, qui minima exercitationem excepturi eaque est totam nihil! Dolor, asperiores laborum omnis at fugit quam nam earum hic impedit sit praesentium est necessitatibus accusantium culpa in iusto, quae voluptas?',
    creator_id: 2,
    creation_date: 05/13/2021, 
  },
  {
    title: 'My Third Blog post (user 1)',
    content: 'Officiis, corrupti vitae dignissimos aut obcaecati magnam possimus repellat assumenda ipsum. Et quis aspernatur deserunt culpa! ',
    creator_id: 1,
    creation_date: 05/24/2021, 
  },
  {
    title: 'My Fourth Blog post (user 1)',
    content: 'He found the chocolate covered roaches quite tasty...',
    creator_id: 1,
    creation_date: 05/23/2021, 
  },
  {
    title: 'My Fifth Blog post (user 1)',
    content: 'Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair...',
    creator_id: 05/10/2021,
  },
  {
    title: 'My Sixth Blog post (user 1)',
    content: 'The clock within this blog and the clock on my laptop are 1 hour different from each other...',
    creator_id: 04/23/2021,
  },
  {
    title: 'My 7th Blog post (user 1)',
    content: 'The green tea and avocado smoothie turned out exactly as would be expected...',
    creator_id: 04/15/2021,
  },
  {
    title: 'My Eighth Blog post (user 1)',
    content: 'Buried deep in the snow, he hoped his batteries were fresh in his avalanche beacon...',
    creator_id: 05/15/2021,
  },
  {
    title: 'My Nineth Blog post (user 1)',
    content: 'The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup...',
    creator_id: 05/02/2021,
  },
  {
    title: 'My Tenth Blog post (user 1)',
    content: 'He ran out of money, so he had to stop playing poker...',
    creator_id: 05/09/2021,
  },
];

// Post.sync();
const seedPost = async () => await Post.bulkCreate(postData);

module.exports = seedPost;
