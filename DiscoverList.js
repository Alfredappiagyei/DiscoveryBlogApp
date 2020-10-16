
import React from 'react';
import { View, Text, FlatList } from "react-native";
import Discover from './Discover'

function DiscoverList({navigation}) {
    const DiscoverList = [
             {  
               name: "Discover Dry is January Actually Improve Your Health",
               profile: require('./assets/discover1.jpg'),
               read: ". 4 min read",
               author: "Alfred Aninn",
               id: "1",
               image: require('./assets/discover1.jpg'),
               text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graeci. "
             },
              {
                name: "How To Seem Like You Always Have Your Spot Together",
                profile: require('./assets/discover2.jpg'),
                read: ". 4 min read",
                author: "Michael scotfield ",
                id: "2",
                 image: require('./assets/discover2.jpg'),
                text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graec"
              },
              {
                name: "Discover Dry is January Actually Improve Your Health",
                profile: require('./assets/discover3.jpg'),
                read: ". 4 min read",
                author: "James Bond",
                id: "3",
                image: require('./assets/discover3.jpg'),
                text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graec"
             },
              {
                name: "You Do Hire A Designer To Make Something. You Hire Them. ",
                profile: require('./assets/discover4.jpg'),
                read: ". 4 min read",
                author: "Mhanra Moy",
                id: "4",
                image: require('./assets/discover4.jpg'),
                text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graeci"
              },

              {
               name: "You Do Hire A Designer To Make Something. You Hire Them. ",
               profile: require('./assets/discover5.jpg'),
               read: "4 min read",
               author: "Sheron Mimi",
               id: "5",
               image: require('./assets/discover5.jpg'),
               text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graeci"
             },
             {
              name: "You Do Hire A Designer To Make Something. You Hire Them. ",
              profile: require('./assets/discover6.jpg'),
              read: ". 4 min read",
              author: "Mike Cortex",
              id: "6",
              image: require('./assets/discover6.jpg'),
              text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graeci"
            },
            {
              name: "You Do Hire A Designer To Make Something. You Hire Them. ",
              profile: require('./assets/discover7.jpg'),
              read: ". 4 min read",
              author: "Ike Shorn",
              id: "7",
              image: require('./assets/discover7.jpg'),
              text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graeci"
            },
          
           
           ];
  
    return (
      <FlatList
        data={DiscoverList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Discover
                name={item.name}
                profile={item.profile}
                read={item.read}
                author={item.author}
                image={item.image}
                text={item.text}
                navigation={navigation}
              />
            </View>
          );
        }}
      />
    );
  }
  
  export default DiscoverList;