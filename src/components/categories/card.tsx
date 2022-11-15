import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Divider, TextInput } from 'react-native-paper';
import { Card, Picker, Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';
import { addField } from '../../stores/fields/actions';
import { addFieldRelation, deleteCategory, updateCategory } from '../../stores/categories/actions';
import AttributesField from './field';
import { Bounceable } from 'rn-bounceable';
import { VectorIcon } from '../../components';
import { theme } from '../../utils/constants';
import DropDown from "react-native-paper-dropdown";

// import SelectDropdown from 'react-native-select-dropdown';
// import RNPickerSelect from 'react-native-picker-select';


interface CategoryCardProps {
    id: string;
}

const options = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Date', value: 'date' }
];


const CategoryCard = ({ id }: CategoryCardProps) => {
    const category = useSelector((s: AppState) => s.categories.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[id].fieldIds);
    const dispatch = useDispatch();

    const selection = Object.keys(category).filter(e => (e !== "fieldIds" && e !== "itemIds" && e !== "id"));

    const onAddNewField = (type: FieldType) => {
        const field: Field = {
            id: uuid.v4() as string,
            category_id: id,
            name: "",
            type: type,
        }
        dispatch(addField(field));
        dispatch(addFieldRelation({ id: id, item_id: field.id }));
    }

    const removeCategory = () => {
        dispatch(deleteCategory(id));
    }

    const update = (field: Category) => {
        dispatch(updateCategory(field));
    }


    const onChangeText = (key: string, value: any) => {
        update({ ...category, [key]: value })
    }


    const onAddField = (props: FieldType) => {
        onAddNewField(props);
    }

    const onValueSelect = () => {

    }

    return (
        <Card width={'96%'} marginV-5 padding-15 style={[styles.container]}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{category.name}</Text>
                <Bounceable onPress={removeCategory.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"AntDesign"} name="closecircle" color={theme.color.blue} size={30} />
                    <Text vsmall wregular>Remove</Text>
                </Bounceable>
            </View>

            <Divider />

            <TextInput mode="outlined" label={"Name"} onChangeText={onChangeText.bind(null, 'name')} value={category.name} />

            {fieldIds && fieldIds.map((_, i) => {
                return (
                    <AttributesField key={_ + 'attribute'} id={_} />
                )
            })}


            <View height={10} />


            {/* @ts-ignore */}
            <Picker
                migrate
                migrateTextField
                value={''}
                onChange={onAddField.bind(null)}
                placeholder="Add New Item"
                fieldType={Picker.fieldTypes.filter}
                marginB-s3
            >
                {options.map(filter => (
                    <Picker.Item key={filter.value} {...filter} />
                ))}
            </Picker>

            {/* <Picker
                value={""}
                placeholder={'Placeholder'}
                onChange={() => console.log('changed')}
                 key={undefined} 
                 testID={undefined} 
                 margin={undefined} padding={undefined} label={undefined} style={undefined} title={undefined} onPress={undefined} children={undefined} transparent={undefined} color={undefined} text10={undefined} text20={undefined} text30={undefined} text40={undefined} text50={undefined} text60={undefined} text65={undefined} text70={undefined} text80={undefined} text90={undefined} text100={undefined} text10T={undefined} text10L={undefined} text10R={undefined} text10M={undefined} text10BO={undefined} text10H={undefined} text10BL={undefined} text20T={undefined} text20L={undefined} text20R={undefined} text20M={undefined} text20BO={undefined} text20H={undefined} text20BL={undefined} text30T={undefined} text30L={undefined} text30R={undefined} text30M={undefined} text30BO={undefined} text30H={undefined} text30BL={undefined} text40T={undefined} text40L={undefined} text40R={undefined} text40M={undefined} text40BO={undefined} text40H={undefined} text40BL={undefined} text50T={undefined} text50L={undefined} text50R={undefined} text50M={undefined} text50BO={undefined} text50H={undefined} text50BL={undefined} text60T={undefined} text60L={undefined} text60R={undefined} text60M={undefined} text60BO={undefined} text60H={undefined} text60BL={undefined} text65T={undefined} text65L={undefined} text65R={undefined} text65M={undefined} text65BO={undefined} text65H={undefined} text65BL={undefined} text70T={undefined} text70L={undefined} text70R={undefined} text70M={undefined} text70BO={undefined} text70H={undefined} text70BL={undefined} text80T={undefined} text80L={undefined} text80R={undefined} text80M={undefined} text80BO={undefined} text80H={undefined} text80BL={undefined} text90T={undefined} text90L={undefined} text90R={undefined} text90M={undefined} text90BO={undefined} text90H={undefined} text90BL={undefined} text100T={undefined} text100L={undefined} text100R={undefined} text100M={undefined} text100BO={undefined} text100H={undefined} text100BL={undefined} grey1={undefined} grey5={undefined} grey10={undefined} grey20={undefined} grey30={undefined} grey40={undefined} grey50={undefined} grey60={undefined} grey70={undefined} grey80={undefined} blue1={undefined} blue5={undefined} blue10={undefined} blue20={undefined} blue30={undefined} blue40={undefined} blue50={undefined} blue60={undefined} blue70={undefined} blue80={undefined} cyan10={undefined} cyan20={undefined} cyan30={undefined} cyan40={undefined} cyan50={undefined} cyan60={undefined} cyan70={undefined} cyan80={undefined} green1={undefined} green5={undefined} green10={undefined} green20={undefined} green30={undefined} green40={undefined} green50={undefined} green60={undefined} green70={undefined} green80={undefined} yellow1={undefined} yellow5={undefined} yellow10={undefined} yellow20={undefined} yellow30={undefined} yellow40={undefined} yellow50={undefined} yellow60={undefined} yellow70={undefined} yellow80={undefined} orange1={undefined} orange5={undefined} orange10={undefined} orange20={undefined} orange30={undefined} orange40={undefined} orange50={undefined} orange60={undefined} orange70={undefined} orange80={undefined} red1={undefined} red5={undefined} red10={undefined} red20={undefined} red30={undefined} red40={undefined} red50={undefined} red60={undefined} red70={undefined} red80={undefined} purple1={undefined} purple5={undefined} purple10={undefined} purple20={undefined} purple30={undefined} purple40={undefined} purple50={undefined} purple60={undefined} purple70={undefined} purple80={undefined} violet1={undefined} violet5={undefined} violet10={undefined} violet20={undefined} violet30={undefined} violet40={undefined} violet50={undefined} violet60={undefined} violet70={undefined} violet80={undefined} white={undefined} black={undefined} dark={undefined} $backgroundDefault={undefined} $backgroundElevated={undefined} $backgroundElevatedLight={undefined} $backgroundNeutralHeavy={undefined} $backgroundNeutralIdle={undefined} $backgroundNeutralMedium={undefined} $backgroundNeutral={undefined} $backgroundNeutralLight={undefined} $backgroundPrimaryHeavy={undefined} $backgroundPrimaryMedium={undefined} $backgroundPrimaryLight={undefined} $backgroundGeneralHeavy={undefined} $backgroundGeneralMedium={undefined} $backgroundGeneralLight={undefined} $backgroundSuccessHeavy={undefined} $backgroundSuccessLight={undefined} $backgroundWarningHeavy={undefined} $backgroundWarningLight={undefined} $backgroundMajorLight={undefined} $backgroundMajorHeavy={undefined} $backgroundDangerHeavy={undefined} $backgroundDangerLight={undefined} $backgroundDisabled={undefined} $backgroundDark={undefined} $backgroundDarkElevated={undefined} $backgroundDarkActive={undefined} $backgroundInverted={undefined} $textDisabled={undefined} $textDefault={undefined} $textNeutralHeavy={undefined} $textNeutral={undefined} $textNeutralLight={undefined} $textDefaultLight={undefined} $textPrimary={undefined} $textGeneral={undefined} $textSuccess={undefined} $textSuccessLight={undefined} $textMajor={undefined} $textDanger={undefined} $textDangerLight={undefined} $iconDefault={undefined} $iconNeutral={undefined} $iconDefaultLight={undefined} $iconPrimary={undefined} $iconPrimaryLight={undefined} $iconGeneral={undefined} $iconGeneralLight={undefined} $iconSuccess={undefined} $iconSuccessLight={undefined} $iconMajor={undefined} $iconDanger={undefined} $iconDangerLight={undefined} $iconDisabled={undefined} $outlineDefault={undefined} $outlineDisabled={undefined} $outlineDisabledHeavy={undefined} $outlinePrimary={undefined} $outlineGeneral={undefined} $outlineWarning={undefined} $outlineDanger={undefined} $outlineInverted={undefined} marginL={undefined} marginT={undefined} marginR={undefined} marginB={undefined} marginH={undefined} marginV={undefined} hitSlop={undefined} onLayout={undefined} pointerEvents={undefined} removeClippedSubviews={undefined} nativeID={undefined} collapsable={undefined} needsOffscreenAlphaCompositing={undefined} renderToHardwareTextureAndroid={undefined} focusable={undefined} shouldRasterizeIOS={undefined} isTVSelectable={undefined} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined} tvParallaxShiftDistanceX={undefined} tvParallaxShiftDistanceY={undefined} tvParallaxTiltAngle={undefined} tvParallaxMagnification={undefined} onStartShouldSetResponder={undefined} onMoveShouldSetResponder={undefined} onResponderEnd={undefined} onResponderGrant={undefined} onResponderReject={undefined} onResponderMove={undefined} onResponderRelease={undefined} onResponderStart={undefined} onResponderTerminationRequest={undefined} onResponderTerminate={undefined} onStartShouldSetResponderCapture={undefined} onMoveShouldSetResponderCapture={undefined} onTouchStart={undefined} onTouchMove={undefined} onTouchEnd={undefined} onTouchCancel={undefined} onTouchEndCapture={undefined} accessible={undefined} accessibilityActions={undefined} accessibilityLabel={undefined} accessibilityRole={undefined} accessibilityState={undefined} accessibilityHint={undefined} accessibilityValue={undefined} onAccessibilityAction={undefined} accessibilityLiveRegion={undefined} importantForAccessibility={undefined} accessibilityElementsHidden={undefined} accessibilityViewIsModal={undefined} onAccessibilityEscape={undefined} onAccessibilityTap={undefined} onMagicTap={undefined} accessibilityIgnoresInvertColors={undefined} paddingL={undefined} paddingT={undefined} paddingR={undefined} paddingB={undefined} paddingH={undefined} paddingV={undefined} mode={undefined} allowFontScaling={undefined} numberOfLines={undefined} onPressIn={undefined} onPressOut={undefined} maxFontSizeMultiplier={undefined} selectionColor={undefined} textBreakStrategy={undefined} textAlign={undefined} textAlignVertical={undefined} onBlur={undefined} onFocus={undefined} multiline={undefined} error={undefined} onContentSizeChange={undefined} onScroll={undefined} scrollEnabled={undefined} autoCapitalize={undefined} autoCorrect={undefined} autoFocus={undefined} blurOnSubmit={undefined} caretHidden={undefined} contextMenuHidden={undefined} defaultValue={undefined} editable={undefined} keyboardType={undefined} maxLength={undefined} onChangeText={undefined} onEndEditing={undefined} onSelectionChange={undefined} onSubmitEditing={undefined} onTextInput={undefined} onKeyPress={undefined} placeholderTextColor={undefined} returnKeyType={undefined} secureTextEntry={undefined} selectTextOnFocus={undefined} selection={undefined} inputAccessoryViewID={undefined} clearButtonMode={undefined} clearTextOnFocus={undefined} dataDetectorTypes={undefined} enablesReturnKeyAutomatically={undefined} keyboardAppearance={undefined} passwordRules={undefined} rejectResponderTermination={undefined} selectionState={undefined} spellCheck={undefined} textContentType={undefined} autoComplete={undefined} importantForAutofill={undefined} disableFullscreenUI={undefined} inlineImageLeft={undefined} inlineImagePadding={undefined} returnKeyLabel={undefined} underlineColorAndroid={undefined} showSoftInputOnFocus={undefined} underlineColor={undefined} renderExpandableInput={undefined} renderExpandable={undefined} onToggleExpandableModal={undefined} topBarProps={undefined} rightButtonProps={undefined} containerStyle={undefined} validate={undefined} markRequired={undefined} errorMessage={undefined} validateOnStart={undefined} validateOnChange={undefined} validateOnBlur={undefined} onChangeValidity={undefined} migrate={undefined} floatingPlaceholder={undefined} floatingPlaceholderColor={undefined} helperText={undefined} hideUnderline={undefined} disabledColor={undefined} centered={undefined} enableErrors={undefined} expandable={undefined} transformer={undefined} titleColor={undefined} titleStyle={undefined} showCharacterCounter={undefined} floatOnFocus={undefined} useTopErrors={undefined} rightIconSource={undefined} floatingPlaceholderStyle={undefined} validationMessagePosition={undefined} extraOffset={undefined} showCharCounter={undefined} charCounterStyle={undefined} hint={undefined} formatter={undefined} useGestureHandlerInput={undefined} labelColor={undefined} labelStyle={undefined} labelProps={undefined} validationMessage={undefined} validationMessageStyle={undefined} retainSpace={undefined} leadingAccessory={undefined} trailingAccessory={undefined} bottomAccessory={undefined} fieldStyle={undefined} dynamicFieldStyle={undefined} preset={undefined} onShow={undefined} renderItem={undefined} useSafeArea={undefined} useCustomTheme={undefined} enableModalBlur={undefined} getLabel={undefined} migrateTextField={undefined} listProps={undefined} showSearch={undefined} searchStyle={undefined} searchPlaceholder={undefined} onSearchChange={undefined} renderCustomSearch={undefined} useWheelPicker={undefined} getItemLabel={undefined} getItemValue={undefined} selectionLimit={undefined} fieldType={undefined} renderPicker={undefined} renderCustomModal={undefined} customPickerProps={undefined} useNativePicker={undefined} renderNativePicker={undefined} pickerModalProps={undefined}                >
              <Picker.Item key={index} value={item}/>
            </Picker> */}
            {/* <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            /> */}




            {/* <SelectDropdown
                data={selection}
                onSelect={onAddNewField.bind(null)}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                renderCustomizedButtonChild={() => {
                    return (
                        <View center>
                            <Text>SELECT AS TITLE</Text>
                        </View>
                    )
                }}
                renderDropdownIcon={() => {
                    return (
                        <VectorIcon vector={"AntDesign"} name={'caretdown'} size={20} color={''} />
                    )
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}

                buttonStyle={{ width: "100%" }}
            />
            <View height={10} />


            <SelectDropdown
                data={countries}
                onSelect={onAddNewField.bind(null)}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                renderCustomizedButtonChild={() => {
                    return (
                        <View center>
                            <Text>ADD NEW ITEM</Text>
                        </View>
                    )
                }}
                renderDropdownIcon={() => {
                    return (
                        <VectorIcon vector={"AntDesign"} name={'caretdown'} size={20} color={''} />
                    )
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}

                buttonStyle={{ width: "100%" }}
            /> */}



            {/* <Button onPress={addNewField.bind(null)}>ADD NEW ITEM</Button> */}

        </Card>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 10,
    },
    controlledWidth: {
        maxWidth: "80%",

    }
});
