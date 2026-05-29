import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { colors } from '@/constants/colors';

export function AppButton({
  title,
  onPress,
  variant = 'primary',
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.button,
        variant === 'secondary' && styles.secondary,
        variant === 'ghost' && styles.ghost,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === 'ghost' && styles.ghostText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: 'center',
  },

  secondary: {
    backgroundColor: colors.surfaceLight,
  },

  ghost: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
  },

  text: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },

  ghostText: {
    color: colors.secondary,
  },
});