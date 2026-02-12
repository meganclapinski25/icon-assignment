function DogScreen() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {dogBreeds.map((breed) => {
            const traits = Object.entries(breed.traits || {});
            return (
              <View key={breed.name}>
                <Text>{breed.name}</Text>
                {traits.map(([trait, value]) => (
                  <View key={trait}>
                    <Text>{trait}: {value}</Text>
                  </View>
                ))}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }