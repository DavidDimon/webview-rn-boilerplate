import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`

export const Loading = styled.ActivityIndicator`
  align-self: center;
`

export const ErrorPage = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  color: red;
  font-size: 16px;
`

export const Button = styled.TouchableOpacity`
  background-color: blue;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`

export const Label = styled.Text`
  color: #fff;
`
