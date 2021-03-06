import React, { useState, useEffect } from "react";
import ItemCard from '../components/ItemCard'
import { __GetItems } from "../services/ItemService";
import { __GetItemsByCategory } from "../services/ItemService";
import '../styles/Browse.css'
function BrowsePage(props) {
    const [browseItems, setBrowseItems] = useState([])
    const getBrowseItems = async () => {
        try {
            const data = await __GetItems()
            setBrowseItems(data)
        } catch (error) {
            throw error
        }
    }
    const sortAppliances = async () => {
        try {
            const category = await __GetItemsByCategory('Appliances')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }
    const sortFitness = async () => {
        try {
            const category = await __GetItemsByCategory('Fitness')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }
    const sortClothing = async () => {
        try {
            const category = await __GetItemsByCategory('Clothing')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }
    const sortEntertainment = async () => {
        try {
            const category = await __GetItemsByCategory('Entertainment')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }
    const sortBooks = async () => {
        try {
            const category = await __GetItemsByCategory('Books')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }
    const sortTools = async () => {
        try {
            const category = await __GetItemsByCategory('Tools')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }
    const sortInstruments = async () => {
        try {
            const category = await __GetItemsByCategory('Instruments')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }
    const sortPantry = async () => {
        try {
            const category = await __GetItemsByCategory('Pantry')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }
    useEffect(() => {
        getBrowseItems()
    }, [])
    const itemList = props.item
    return (
        <div className="browsePage">
            <div className="browsePageTop">
                <h1 className="pageTitle">browse</h1>
                <div className="catButtons">
                    <button className="btnsBrowse" onClick={getBrowseItems}>all</button>
                    <button className="btnsBrowse" onClick={sortAppliances}>appliances</button>
                    <button className="btnsBrowse" onClick={sortFitness}>fitness</button>
                    <button className="btnsBrowse" onClick={sortClothing}>clothing</button>
                    <button className="btnsBrowse" onClick={sortEntertainment}>entertainment</button>
                    <button className="btnsBrowse" onClick={sortBooks}>books</button>
                    <button className="btnsBrowse" onClick={sortTools}>tools</button>
                    <button className="btnsBrowse" onClick={sortInstruments}>instruments</button>
                    <button className="btnsBrowse" onClick={sortPantry}>pantry</button>
                </div>
                <hr className="greyLine"></hr>
            </div>
            <div className="itemList">
                {browseItems.map((item, idx) => (
                    <ItemCard
                    //model attributes go here
                        className="sq"
                        id={item.id}
                        key={idx}
                        image={item.image}
                        title={item.title}
                        condition={item.condition}
                        category={item.category}
                        description={item.description}
                        onClick={() => props.history.push(`/items/${item.id}`, item = { item })}
                    //model attributes end here
                    />
                ))}
            </div>
        </div>
    );
}
export default BrowsePage;
