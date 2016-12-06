/*
 * Copyright (c) 2016 ASU CodeDevils

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without 
limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
package cdbrewsim;
import java.util.List;
public class GameState {
	int brewingScore;
	List<Recipe> recipes;
	List<InvItem> inventory;
	List<Brew> brews;
	List<Equipment> equipment;
	double balance;
	int brewingRank;
	
	public GameState(int brewsc, int brewr){
		
	}
	public int getBrewingScore(){
		
	}
	public boolean setBrewingScore(int newscore){
		
	}
	public List<Recipe> getRecipes(){
		
	}
	public boolean setRecipes(List<recipe> allrecipes){
		
	}
	//Will need to add single recipes as the game goes along. 
	public boolean setRecipe(Recipe recipe){
		
	}
	public List<InvItem> getInventory(){
		
	}
	public boolean setInventory(List<InvItem> items){
		
	}
	//add a single ingredient to their inventory
	public boolean setIventory(InvItem item){
		
	}
	public List<Brew> getBrews(){
		
	}
	public boolean setBrews(List<Brew> beers){
		
	}
	public boolean setBrews(Brew beer){
		
	}
	public double getBalance(){
		
	}
	public boolean setBalance(double bal){
		
	}
	public int getBrewRank(){
		
	}
	public boolean setBrewRank(){
		
	}

}
