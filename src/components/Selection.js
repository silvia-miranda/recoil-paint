import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ResizeHandler from './ResizeHandler';
import { movingItemIdsState, selectedIdsState, selectionBoundingBox } from '../atoms';
import useMove from './hooks/useMove';

export default function Selection() {
  const selectedIds = useRecoilValue(selectedIdsState);
  const selection = useRecoilValue(selectionBoundingBox);
  const setMovingItemIds = useSetRecoilState(movingItemIdsState);

  const { onMouseDown } = useMove(({ status }) => {
    if (!selection) {
      return null;
    }

    if (status === 'start') {
      setMovingItemIds(selectedIds)
    }

    if (status === 'end') {
      setMovingItemIds([])
    }
  })

  if (!selection) {
    return null;
  }

  const { x, y, width, height } = selection;

  return (
    <>
      <View
        style={[styles.selection, {
          left: x,
          top: y,
          width,
          height
        }]}
        onMouseDown={onMouseDown}
      />
      <ResizeHandler />
    </>
  )
}

const styles = StyleSheet.create({
  selection: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'blue',
    position: 'absolute',
    cursor: 'move',
  },
})
