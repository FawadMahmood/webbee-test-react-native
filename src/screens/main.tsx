import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native-ui-lib';
import { ScreenComponent } from 'rnn-screens';
import { If } from '@kanzitelli/if-component';
import { observer } from 'mobx-react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { FlashList } from '@shopify/flash-list';
import { Category } from '../components';
import { store } from '../store';
import uuid from 'react-native-uuid';
import { addCategory } from '../store/categories/actions';

export const Main: ScreenComponent = observer(({ componentId }) => {
  const dispatch = useDispatch();
  const categories = store.getState().categories;

  // to make sure whole list updates when length of categories changes
  // might help prevent render count for the whole screen
  useSelector((s: AppState) => s.categories.length);
  // might help prevent render count for the whole screen
  // to make sure whole list updates when length of categories changes


  const addNewCategory = useCallback(() => {
    const new_category: Category = {
      id: uuid.v4().toString(),
      name: "New Category"
    }
    dispatch(addCategory(new_category));
  }, [dispatch]);


  const renderItem = ({ item }: { item: Category, index: number }) => {
    return (
      <Category id={item.id} marginV-20 />
    )
  }

  return (
    <View padding-10 flex spread bg-bgColor>
      <FlashList
        data={categories}
        renderItem={renderItem.bind(null)}
        estimatedItemSize={200}
      />
      <Button onPress={addNewCategory} bg-black label="ADD NEW CATEGORY" />
    </View>
  );
});
