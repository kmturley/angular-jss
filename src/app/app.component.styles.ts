export const red: string = '#F44336'
export const green: string = '#4CAF50'
export const blue: string = '#2196F3'

export const styles: Object = {
  title: {
    textAlign: 'center',
    backgroundColor: '#E0E0E0',
    '&:hover': {
      backgroundColor: '#BDBDBD'
    }
  },
  area: {
    width: '100%',
    height: '10rem',
    color: 'white',
    backgroundColor: data => data.area.backgroundColor
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1rem'
  },
  redButton: createButtonStyle(red),
  greenButton: createButtonStyle(green),
  blueButton: createButtonStyle(blue)
}

function createButtonStyle(color: string): Object {
  return {
    flex: 'auto',
    '&:hover': { color }
  }
}
