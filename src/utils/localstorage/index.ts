import AsyncStorage from '@react-native-async-storage/async-storage';

// Keynya yaitu 'user' dan 'valuenya adalah nilai dari user tersebut. Tapi async storage membutuhkan value dalam bentuk string makanya di konversi dengan JSON.stringify
// contoh data di localstorage
// {
//   user: {
//     nama: 'Johandika',
//     umur: 23,
//   }
// }

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};
