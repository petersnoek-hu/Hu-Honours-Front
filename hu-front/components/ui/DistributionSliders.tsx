import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

type SliderItem = {
  id: string;
  label: string;
  color: string;
  initialValue?: number;
};

type DistributionSlidersProps = {
  items: SliderItem[];
  total?: number;
  onChange?: (values: Record<string, number>) => void;
};

const DistributionSliders = ({
  items,
  total = 100,
  onChange,
}: DistributionSlidersProps) => {
  // Compute initial values - distribute evenly if not provided
  const getInitialValues = () => {
    const defaultValue = Math.floor(total / items.length);
    const values: Record<string, number> = {};

    // First set all sliders to default value
    items.forEach((item) => {
      values[item.id] =
        item.initialValue !== undefined ? item.initialValue : defaultValue;
    });

    // Adjust for rounding errors to ensure total is exact
    let currentTotal = Object.values(values).reduce((sum, val) => sum + val, 0);

    // If we're off, adjust the first slider
    if (currentTotal !== total && items.length > 0) {
      values[items[0].id] += total - currentTotal;
    }

    return values;
  };

  const [sliderValues, setSliderValues] = useState<Record<string, number>>(
    getInitialValues()
  );

  // Calculate current total
  const currentTotal = Object.values(sliderValues).reduce(
    (sum, val) => sum + val,
    0
  );

  // Calculate upper limit for each slider
  const getUpperLimit = (id: string): number => {
    return sliderValues[id] + (total - currentTotal);
  };

  // Handle slider changes
  const handleSliderChange = (id: string, newValue: number): void => {
    // Calculate the difference between the new and old values
    const difference = newValue - sliderValues[id];

    // If there's no change, return early
    if (difference === 0) return;

    // Create a copy of current values
    const updatedValues = { ...sliderValues };

    // If increasing one slider
    if (difference > 0) {
      // Calculate what the new total would be
      const newTotal = currentTotal + difference;

      // If the new total would exceed the target total, we need to redistribute
      if (newTotal > total) {
        // Cap the new value to respect the total limit
        const maxPossibleValue = sliderValues[id] + (total - currentTotal);
        updatedValues[id] = maxPossibleValue;

        // Calculate how much we need to distribute (the overflow)
        const overflow = newTotal - total;
        const toDistribute = overflow;

        // Get other categories to redistribute from
        const otherIds = Object.keys(sliderValues).filter((key) => key !== id);

        // Sort other sliders by value (largest first) to decrease larger ones first
        otherIds.sort((a, b) => updatedValues[b] - updatedValues[a]);

        let remaining = toDistribute;
        for (const otherId of otherIds) {
          // Calculate how much we can take from this slider
          const available = updatedValues[otherId];
          const take = Math.min(available, remaining);

          // Decrease this slider
          updatedValues[otherId] -= take;
          remaining -= take;

          // If we've distributed everything, break
          if (remaining === 0) break;
        }
      } else {
        // If total is still <= target, just update the value without redistributing
        updatedValues[id] = newValue;
      }
    } else {
      // If decreasing, just update the value directly
      updatedValues[id] = newValue;
    }

    // Update state with new values
    setSliderValues(updatedValues);

    // Call onChange callback if provided
    if (onChange) {
      onChange(updatedValues);
    }
  };

  // Effect to call onChange when component mounts with initial values
  useEffect(() => {
    if (onChange) {
      onChange(sliderValues);
    }
  }, []);

  return (
    <View className="w-full">
      <Text className="text-white mb-4">
        Verdeel {total}% over de {items.length} dimensies
      </Text>

      {items.map((item) => (
        <View key={item.id}>
          <View className="flex-row items-center justify-between">
            <Text className="text-white mt-2 text-lg font-bold flex-1">
              {item.label}:
            </Text>
            <Text className="text-white text-lg font-bold">
              {sliderValues[item.id]}%
            </Text>
          </View>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={total}
            step={1}
            upperLimit={getUpperLimit(item.id)}
            value={sliderValues[item.id]}
            onValueChange={(value) => handleSliderChange(item.id, value)}
            minimumTrackTintColor={item.color}
            maximumTrackTintColor="#666666"
            thumbTintColor={item.color}
          />
        </View>
      ))}

      {/* Total display */}
      <View className="bg-white/10 p-4 rounded-lg mt-4">
        <Text className="text-white text-center text-lg font-bold">
          Totaal: {currentTotal}%
        </Text>
      </View>
    </View>
  );
};

export default DistributionSliders;
